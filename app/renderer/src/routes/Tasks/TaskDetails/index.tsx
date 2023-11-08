import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  useCallback,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AppStateTypes,
  editTaskCard,
  editTaskCardText,
  removeTaskCard,
  setTaskCardDone,
  setTaskCardNotDone,
} from "store";
import { ConnnectorContext } from "contexts";
import autoSize from "autosize";

import {
  StyledDetailContainer,
  StyledDescriptionForm,
  StyledDescriptionWrappper,
  StyledDescriptionFormatHelp,
  StyledDetailHeader,
  StyledDetailCloseButton,
  StyledButtonNormal,
  StyledButtonPrimary,
  StyledDeleteButton,
  StyledDescriptionArea,
  StyledDescriptionHeading,
} from "styles";
import { Checkbox, SVG } from "components";
import MDPreviewer from "./MDPreviewer";

type Props = {
  listId: string;
  cardId: string;
  onExit?: () => void;
};

const TaskDetails = React.forwardRef<HTMLDivElement, Props>(
  ({ listId, cardId, onExit }, ref) => {
    const cardTextAreaRef = useRef<HTMLTextAreaElement>(null);
    const descriptionAreaRef = useRef<HTMLTextAreaElement>(null);
    const descriptionFormRef = useRef<HTMLFormElement>(null);

    const dispatch = useDispatch();

    const tasks = useSelector(
      (state: AppStateTypes) => state.tasks.present
    );

    const { openExternalCallback } = useContext(ConnnectorContext);

    const card = tasks
      .find((list) => list._id === listId)
      ?.cards.find((card) => card._id === cardId);

    const [editingDescription, setEditingDescription] = useState(false);

    const [description, setDescription] = useState(card?.description);

    const [showPreview, setShowPreview] = useState(false);

    useEffect(() => {
      if (openExternalCallback) {
        openExternalCallback();
      }
    }, [openExternalCallback, editingDescription, showPreview]);

    useEffect(() => {
      if (cardTextAreaRef.current) {
        if (card?.text) {
          cardTextAreaRef.current.value = card?.text;
          autoSize(cardTextAreaRef.current);
        }
      }
    }, [card]);

    useEffect(() => {
      if (editingDescription) {
        if (descriptionAreaRef.current) {
          descriptionAreaRef.current.focus();
          autoSize(descriptionAreaRef.current);
        }
      }
    }, [editingDescription, showPreview]);

    const onEditCardText = useCallback(() => {
      if (cardTextAreaRef.current && cardTextAreaRef.current.value) {
        dispatch(
          editTaskCardText(
            listId,
            cardId,
            cardTextAreaRef.current.value
          )
        );
      }
    }, [dispatch, cardId, listId]);

    const onSubmitAction = useCallback(
      (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(editTaskCard(listId, cardId, description));
        setEditingDescription(false);
      },
      [dispatch, cardId, description, listId]
    );

    const onCardDeleteAction = useCallback(() => {
      dispatch(removeTaskCard(listId, cardId));

      if (onExit) {
        onExit();
      }
    }, [cardId, dispatch, listId, onExit]);

    const showPreviewCallback = useCallback(
      (e) => setShowPreview(e.currentTarget.checked),
      []
    );

    const setTaskCardDoneCallback = useCallback(
      (e) => {
        if (e.currentTarget.checked) {
          dispatch(setTaskCardDone(listId, card?._id));
        } else {
          dispatch(setTaskCardNotDone(listId, card?._id));
        }
      },
      [dispatch, listId, card]
    );

    const editDescriptionCallback = useCallback(
      () => setEditingDescription(true),
      []
    );

    const dontEditDescriptionCallback = useCallback(
      () => setEditingDescription(false),
      []
    );

    const setDescriptionCallback = useCallback(
      (e) => setDescription(e.target.value),
      []
    );

    useEffect(() => {
      function registerEscape(e: KeyboardEvent) {
        if (e.keyCode === 27) {
          if (onExit) {
            onExit();
          }
        }
      }

      document.addEventListener("keydown", registerEscape);
      return () =>
        document.removeEventListener("keydown", registerEscape);
    }, [onExit]);

    return (
      <StyledDetailContainer ref={ref}>
        <StyledDetailHeader
          ref={cardTextAreaRef}
          onBlur={onEditCardText}
        />

        <StyledDetailCloseButton onClick={onExit}>
          <SVG name="close" />
        </StyledDetailCloseButton>

        <StyledDescriptionWrappper>
          <StyledDescriptionHeading>
            Description
            <Checkbox
              label="preview"
              disabled={!editingDescription}
              onChange={showPreviewCallback}
              asPrimary
            />
          </StyledDescriptionHeading>

          {editingDescription ? (
            <StyledDescriptionForm
              onSubmit={onSubmitAction}
              ref={descriptionFormRef}
            >
              {showPreview ? (
                <MDPreviewer description={description} />
              ) : (
                <>
                  <StyledDescriptionArea
                    placeholder="Add a more detailed description..."
                    value={description}
                    onChange={setDescriptionCallback}
                    ref={descriptionAreaRef}
                  />
                  <StyledButtonPrimary type="submit">
                    Save
                  </StyledButtonPrimary>

                  <StyledButtonNormal
                    type="reset"
                    onClick={dontEditDescriptionCallback}
                  >
                    Cancel
                  </StyledButtonNormal>

                  <StyledDescriptionFormatHelp
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
                  >
                    Formatting Help
                  </StyledDescriptionFormatHelp>
                </>
              )}
            </StyledDescriptionForm>
          ) : (
            <MDPreviewer
              description={description}
              onClick={editDescriptionCallback}
            />
          )}
          <Checkbox
            label="Done"
            checked={card?.done}
            onChange={setTaskCardDoneCallback}
          />
        </StyledDescriptionWrappper>

        <StyledDeleteButton onClick={onCardDeleteAction}>
          <SVG name="trash" /> Delete Card
        </StyledDeleteButton>
      </StyledDetailContainer>
    );
  }
);

export default TaskDetails;

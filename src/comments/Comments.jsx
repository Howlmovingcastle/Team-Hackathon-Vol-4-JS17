import React, { useEffect, useState } from "react";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  deleteComment as deleteCommentApi,
  updateComment as updateCommentApi,
} from "../Api";
import Comment from "../comments/Comment";
import CommentForm from "../comments/CommentsForm";

const Comments = ({ currentUserId }) => {
  // useState для хранения и перезаписи пустого массива из backend api
  const [backEndComments, setBackendComments] = useState([]);

  const [activeComment, setActiveComment] = useState(null);

  //   Для стягивания данных с api и сохранения родительского id
  const rootComments = backEndComments.filter(
    (backEndComments) => backEndComments.parentId === null
  );

  const getReplies = (commentId) => {
    //   Перебор фильром и сорт каждого комментария по дате загрузки (самая новая будет сверху)
    return backEndComments
      .filter((backEndComments) => backEndComments.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  //  Функция Для добавления комментария. parendId нужен для replies

  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backEndComments]);
      setActiveComment(null);
    });
  };

  //   Функция удаление с последующей проверкой alert и проверкой id

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure that you want to delete a comment?")) {
      deleteCommentApi(commentId).then(() => {
        //   Переменная хранит в себе отфильтрованный список комментариев и говорит
        // удали все остальное, если не совпадает по id и оставь только совпадение
        const updatedBackendComments = backEndComments.filter(
          (backEndComments) => backEndComments.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text, commentId).then(() => {
      const updatedBackendComments = backEndComments.map((backEndComment) => {
        if (backEndComment.id === commentId) {
          return { ...backEndComment, body: text };
        }
        return backEndComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      {/* Импортирование формы для комментария и передача пропсами функций*/}
      <div className="comment-form-title">Write a comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {/* Перебор родительских id и отображение каждого комментария из api и передача в компонент Comment */}
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
            deleteComment={deleteComment}
            updateComment={updateComment}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;

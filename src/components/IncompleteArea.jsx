import React from "react";

export const IncompleteArea = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <>
      <div className="incompleteArea">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* map関数でincompleteTodosを処理し、リストを可変で表示する */}
          {/* ncompleteTodosから取り出した値が引数todoに格納される */}
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="listRow">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

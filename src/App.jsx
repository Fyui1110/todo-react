import React, { useState } from "react";
import "./styles.css";
import { ImputTodo } from "./components/ImputTodo";
import { IncompleteArea } from "./components/IncompleteArea";
import { CompleteArea } from "./components/CompleteArea";

export const App = () => {
  // todoText = 入力したTODO
  const [todoText, setTodoText] = useState("");
  // incompleteTodos = 未完了のTODOの配列
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // completeTodos = 完了のTODOの配列
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 追加ボタンの処理
  const onClickAdd = () => {
    if (todoText === "") return;
    // incompleteTodosに値を追加する
    // スプレッド構文
    const newTodosAdd = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodosAdd);
    // 入力フォームのリセット
    setTodoText("");
  };

  // 未完了のTODOから削除
  const deleteIncompleteTodos = (index) => {
    // incompleteTodosから削除する
    const newDeleteTodos = [...incompleteTodos];
    newDeleteTodos.splice(index, 1);
    setIncompleteTodos(newDeleteTodos);
  };
  // 完了のTODOから削除
  const deleteCompleteTodos = (index) => {
    // completeTodosから削除する
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };

  // 削除ボタンの処理
  const onClickDelete = (index) => {
    deleteIncompleteTodos(index);
  };

  // 完了ボタンの処理
  const onClickComplete = (index) => {
    // incompleteTodosから削除する
    deleteIncompleteTodos(index);
    // completeTodosに追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  // 戻るボタンの処理
  const onClickBack = (index) => {
    deleteCompleteTodos(index);
    // incompleteTodosに追加
    const newTodosAdd = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodosAdd);
  };

  return (
    <>
      <ImputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOを超えました！</p>
      )}
      <IncompleteArea
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteArea todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

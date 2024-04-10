import React from "react";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { format } from "date-fns";
import { useDeleteTodoMutation } from "../App/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { changeEdit } from "../App/userSlice";

const Todo = ({ text, createdAt, _id, input, ID }) => {
  const [deleteItem] = useDeleteTodoMutation();
  const edit = useSelector((state) => state.user.edit);

  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    await deleteItem(_id);
  };

  const handleEdit = () => {
    input(text);
    ID(_id);
    dispatch(changeEdit(true));
  };

  return (
    <div className="flex justify-between w-[100%] mb-3 bg-neutral-200 py-3 rounded-md">
      <div className="md:pl-8 pl-3">
        <p className="font-semibold text-neutral-600">{text}</p>
        <p className="text-neutral-500">
          {format(new Date(createdAt), "h:mm a, MM/dd/yyyy")}
        </p>
      </div>
      <div className="flex pt-2 pr-2 md:pr-4">
        <span
          onClick={handleDelete}
          className="bg-white mr-2 h-8 p-2 rounded-md cursor-pointer"
        >
          <FaTrash className="size-4" />
        </span>
        <span
          onClick={handleEdit}
          className="bg-white h-8 md:mr-3 mr-1 p-2 rounded-md cursor-pointer"
        >
          <FaPen className="size-4" />
        </span>
      </div>
    </div>
  );
};

export default Todo;

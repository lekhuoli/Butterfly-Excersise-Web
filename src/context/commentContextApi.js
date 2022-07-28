import React from "react";
import { API } from "../utils/api";

export const CommentContextApi = React.createContext();

export default function CommentContextProvider({ children }) {
  const [comments, setComments] = React.useState([]);

  const getCommentItem = async () => {
    try {
      const resp = await API.get("/api/comments");
      const { data } = resp;
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCommentItem();
  }, []);

  return (
    <CommentContextApi.Provider value={{ comments, setComments }}>
      {children}
    </CommentContextApi.Provider>
  );
}

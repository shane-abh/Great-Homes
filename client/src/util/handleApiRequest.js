import { toast } from "react-toastify";

export const handleApiRequest = async (
  dispatch,
  navigate,
  url,
  method,
  startAction,
  successAction,
  failureAction,
  navigateTo = null,
  headers = {},
  body = null
) => {
  try {
    dispatch(startAction());
    const options = {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    };
    const res = await fetch(url, options);
    const data = await res.json();
    if (data.success === false) {
      dispatch(failureAction(data.message));
      toast.error(data.message)
      return;
    }
    dispatch(successAction(data));
    if (navigateTo) {
      navigate(navigateTo);
    }
  } catch (error) {
    dispatch(failureAction(error.message));
  }
};

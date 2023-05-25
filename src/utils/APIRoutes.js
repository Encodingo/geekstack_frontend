// export const host = "http://localhost:5000";
export const host = process.env.REACT_APP_HOST_URL;

export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/register`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const makeAdminRoute = `${host}/api/auth/makeadmin`;



//training routes
export const createtrainingRoute = `${host}/api/training/createtraining`;
export const alltrainingsRoute = `${host}/api/training/alltrainings`;
export const deletetrainingRoute = `${host}/api/training/deletetraining`;
export const editTrainingRoute = `${host}/api/training/edittraining`;
export const addtraining = `${host}/api/auth/makeadmin`;

// College Routes
export const college = `${host}/api/college`;
export const getAllColleges = `${host}/api/getAllColleges`;


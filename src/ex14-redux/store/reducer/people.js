import { createSlice, createSelector } from "@reduxjs/toolkit";
import { get, add, getById, deleteById } from "../../service/PeopleService";

const personSlice = createSlice({
  name: "people",
  initialState: {
    list: [],
    error: {},
  },
  reducers: {
    peopleReceived: (state, action) => {
      state.list = action.payload;
    },
    peopleRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    personAdded: (state, action) => {
      state.list.push(action.payload);
    }
  },
});

export const {
  peopleReceived,
  peopleRequestFailed,
  personAdded,
  personDeleted,
} = personSlice.actions;

export default personSlice.reducer;


export const getPeopleAction = () => (dispatch) => {
  get().then(response => {
    console.log("BBBBB",response);
    dispatch({type: peopleReceived.type, payload: response.data});
  });
};

export const addPersonAction = (data) => (dispatch) => {
  add(data).then(response => {
    console.log("AAAAA",response);
    dispatch({type: personAdded.type, payload: response.data});
  });
};

export const deletePersonByIdAction = (id) => (dispatch) => {
  deleteById(id).then(response => {
    console.log("BBBBB",response);
    get().then(response => {
      console.log("BBBBB",response);
      dispatch({type: peopleReceived.type, payload: response.data});
    });
    
  });
};

export const getPersonByIdAction = (id) =>
  createSelector(
    (state) => state.people.list,
    (people) => people.filter((person) => person.id === id)
  );

export const selectPeople = state => state.people.list;

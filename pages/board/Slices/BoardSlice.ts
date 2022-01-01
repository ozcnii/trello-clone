import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoardState, IBackground, ICreateCard } from '../../../models/board.models';


const initialState: BoardState = {
  background: {
    isImage: false,
    background: "grey-200"
  },

  columns: [
    {
      id: "0",
      name: "000",
      cards: [
        {
          value: '000',
          id: "0"
        }
      ]
    }
  ],

}

export const BoardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBackground(state, action: PayloadAction<IBackground>) {
      state.background = action.payload;
    },
    createCard(state, action: PayloadAction<ICreateCard>) {
      const id = Date.now().toString();

      state.columns.forEach((column => {
        if (column.id === action.payload.columnId) {
          column.cards.push({
            id: id,
            value: action.payload.value.toString()
          });
        }
      }))
    },
    createColumn(state, action: PayloadAction<string>) {
      const id = Date.now().toString();

      state.columns.push({
        id: id,
        name: action.payload,
        cards: []
      })
    }
  }
})

export default BoardSlice.reducer;
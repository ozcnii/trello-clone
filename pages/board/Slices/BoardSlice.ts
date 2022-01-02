import { ICardRemove } from './../../../models/board.models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoardState, IBackground, ICreateCard, ISortCards } from '../../../models/board.models';

const initialState: BoardState = {
  background: {
    type: "color",
    background: "bg-grey-200"
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
    },
    sortCards(state, action: PayloadAction<ISortCards>) {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd
      } = action.payload;

      if (droppableIdStart === droppableIdEnd) {
        const column = state.columns.find(column => column.id === droppableIdStart);
        const card = column?.cards.splice(droppableIndexStart, 1);
        if (card) {
          column?.cards.splice(droppableIndexEnd, 0, ...card);
        }
      } else {
        const columnStart = state.columns.find(column => column.id === droppableIdStart);
        const card = columnStart?.cards.splice(droppableIndexStart, 1);
        const columnEnd = state.columns.find(column => column.id === droppableIdEnd);
        if (card) {
          columnEnd?.cards.splice(droppableIndexEnd, 0, ...card)
        }
      }
    },
    cardRemove(state, action: PayloadAction<ICardRemove>) {
      state.columns.forEach(column => {
        if (column.id == action.payload.columnId) {
          const cardIndex = column.cards.findIndex(card => card.id === action.payload.cardId)
          column.cards.splice(cardIndex, 1);
        }
      });
    },
    columnRemove(state, action: PayloadAction<string>) {
      state.columns.forEach((column, index) => {
        if (column.id == action.payload) {
          state.columns.splice(index, 1);
        }
      });
    }
  }
})




export default BoardSlice.reducer;
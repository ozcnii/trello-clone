import { ICardRemove, ICreateBoard } from '../../../models/board.models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBoardState, IBackground, ICreateCard, ISortCards } from '../../../models/board.models';
import { findCurrentBoard } from './utils';

const initialState: IBoardState = {
  boards: [
    {
      id: '123',
      authorId: "user-id",
      name: 'first_board',
      background: {
        type: "color",
        background: "bg-green-500"
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
    },
    {
      id: '12',
      authorId: "user-id",
      name: 'second_board',
      background: {
        type: "color",
        background: "bg-red-500"
      },

      columns: [
        {
          id: "01",
          name: "12.1",
          cards: [
            {
              value: 'da',
              id: "12.3"
            }
          ]
        },
        {
          id: "02",
          name: "12.2",
          cards: [
            {
              value: 'as',
              id: "12.4"
            }
          ]
        }
      ],
    }
  ],
  currentBoardId: ''
}

export const BoardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBackground(state, action: PayloadAction<IBackground>) {
      state.boards.forEach(board => {
        if (board.id === state.currentBoardId) {
          localStorage.setItem(state.currentBoardId, JSON.stringify(action.payload))
          board.background = action.payload;
        }
      })
    },

    setCurrentBoardId(state, action: PayloadAction<string>) {
      state.currentBoardId = action.payload;
    },

    createCard(state, action: PayloadAction<ICreateCard>) {
      const id = Date.now().toString();
      const currentBoard = findCurrentBoard(state.boards, state.currentBoardId);

      currentBoard?.columns.forEach((column => {
        if (column.id === action.payload.columnId) {
          column.cards.push({
            id: id,
            value: action.payload.value.toString()
          });
        }
      }));
    },
    createColumn(state, action: PayloadAction<string>) {
      const id = Date.now().toString();
      const currentBoard = findCurrentBoard(state.boards, state.currentBoardId);

      currentBoard?.columns.push({
        id: id,
        name: action.payload,
        cards: []
      });
    },
    sortCards(state, action: PayloadAction<ISortCards>) {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd
      } = action.payload;

      const currentBoard = findCurrentBoard(state.boards, state.currentBoardId);

      if (droppableIdStart === droppableIdEnd) {
        const column = currentBoard?.columns.find(column => column.id === droppableIdStart);
        const card = column?.cards.splice(droppableIndexStart, 1);
        if (card) {
          column?.cards.splice(droppableIndexEnd, 0, ...card);
        }
      } else {
        const columnStart = currentBoard?.columns.find(column => column.id === droppableIdStart);
        const card = columnStart?.cards.splice(droppableIndexStart, 1);
        const columnEnd = currentBoard?.columns.find(column => column.id === droppableIdEnd);
        if (card) {
          columnEnd?.cards.splice(droppableIndexEnd, 0, ...card)
        }
      }
    },
    cardRemove(state, action: PayloadAction<ICardRemove>) {
      const currentBoard = findCurrentBoard(state.boards, state.currentBoardId);

      currentBoard?.columns.forEach(column => {
        if (column.id == action.payload.columnId) {
          const cardIndex = column.cards.findIndex(card => card.id === action.payload.cardId)
          column.cards.splice(cardIndex, 1);
        }
      });
    },
    columnRemove(state, action: PayloadAction<string>) {
      const currentBoard = findCurrentBoard(state.boards, state.currentBoardId);

      currentBoard?.columns.forEach((column, index) => {
        if (column.id == action.payload) {
          currentBoard?.columns.splice(index, 1);
        }
      });
    },
    createBoard(state, action: PayloadAction<ICreateBoard>) {
      const id = Date.now().toString();
      const name = action.payload.name;
      const authorId = action.payload.authorId;

      state.boards.push({
        id, name, authorId,
        background: {
          type: "color",
          background: "bg-gray-200"
        },
        columns: []
      });
    }, 
    removeBoard(state, action: PayloadAction<string>) {
      state.boards.forEach((board, index) => {
        if (board.id === action.payload) {
          state.boards.splice(index, 1);
        }
      })
    }
  }
})

const BoardReducer = BoardSlice.reducer;
export { BoardReducer }
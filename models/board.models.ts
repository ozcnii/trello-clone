export interface ICard {
  value: string,
  id: string,
}

export interface IColumn {
  name: string,
  id: string,
  cards: ICard[]
}

export interface IBackground {
  type: "img" | "gradient" | "color",
  background: string
}

export interface IBoardState {
  boards: IBoard[],
  currentBoardId: string,
}

export interface IBoard {
  authorId: string
  id: string,
  background: IBackground,
  columns: IColumn[],
  name: string
}

export interface ICreateCard {
  columnId: string,
  value: string,
}

export interface ISortCards {
  droppableIdStart: string,
  droppableIdEnd: string,
  droppableIndexStart: number,
  droppableIndexEnd: number,
}

export interface ICardRemove {
  columnId: string,
  cardId: string
}

export interface ICreateBoard {
  name: string,
  authorId: string
}
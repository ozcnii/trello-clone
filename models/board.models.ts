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

export interface BoardState {
  background: IBackground,
  columns: IColumn[],
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
// change this file to set up db

/**
 * Data Model Interfaces
 */
import { StudentItem, Item } from './item.interface';
import { Items } from './items.interface';

 
/**
 * In-Memory Store
 */

let items: Items = {
  1: {
    id: 1,
    firstName: 'Jacob',
    lastName: 'Simpson',
    courseName: 'Javascript Fundamentals',
    numberOfHrs: '40',
    price: '500',
    studentDob: '1990/05/05'
  },
  2: {
    id: 2,
    firstName: 'Tyler',
    lastName: 'Kyle',
    courseName: 'Intro to Kotlin',
    numberOfHrs: '24',
    price: '259',
    studentDob: '1994/09/05'
  },
  3: {
    id: 3,
    firstName: 'Thomas',
    lastName: 'Pajero',
    courseName: 'Erlang Basics',
    numberOfHrs: '60',
    price: '100',
    studentDob: '2000/01/01'
  }
};


/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => Object.values(items);

export const find = async (id: number): Promise<Item> => items[id];

export const create = async (newItem: StudentItem): Promise<Item> => {
  const id = new Date().valueOf();

  items[id] = {
    ...newItem,
    id
  }

  return items[id];

}

export const update = async (id: number, itemUpdate: StudentItem): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { ...itemUpdate, id };

  return items[id];

}

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];

}
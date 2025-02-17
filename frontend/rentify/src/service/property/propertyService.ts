import { isAxiosError } from "axios";
/* import { authHeaders, backend } from "../auth/authService";*/
import { Property } from "../../interfaces/Property";
import { OWNERS, PROPERTIES } from "../../data/db";

export const getAllProperties = async (params?: URLSearchParams) => {
  try {
    let filter: {
      [k: string]: string;
    };
    if (params) {
      filter = Object.fromEntries(params);
    }
    const response = PROPERTIES.filter((property) => {
      if (filter) {
        return Object.entries(filter).every(([key, value]) => {
          if (property[key as "city"]) {
            return property[key as "city"].includes(value as string);
          } else if (key.startsWith("room")) {
            return property["rooms"].some(
              (room) => room.roomName === key.slice(4)
            );
          } else if (key.includes("min")) {
            const firstLetter = key.slice(3).charAt(0).toLowerCase();
            const newKey = firstLetter + key.slice(4);
            return property[newKey as "price"] >= Number(value);
          } else if (key.includes("max")) {
            const firstLetter = key.slice(3).charAt(0).toLowerCase();
            const newKey = firstLetter + key.slice(4);
            return property[newKey as "price"] <= Number(value);
          }
        });
      } else {
        return true;
      }
    });
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const getPropertyById = async (id: string) => {
  try {
    const response = PROPERTIES.find((property) => property.id === Number(id));
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const getPropertiesByUserId = async (id: number) => {
  try {
    const response = PROPERTIES.filter((property) => property.ownerId === id);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const getOwnerById = async (id: number) => {
  try {
    const response = OWNERS.find((owner) => owner.id === Number(id));
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const createProperty = async (property: Property) => {
  try {
    return {property, status: 200, isSuccess: true};
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const updateProperty = async (property: Property, id: number) => {
  try {
    return { property, id };
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const deleteProperty = async (id: number) => {
  try {
    return { id, status: 204 };
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { fetchContent } from "../api/contentAPI";
import Content from "../typings/Content";
import { v4 as uuidv4 } from "uuid";
import Bullet from "../typings/Bullet";

export interface ContentState {
  content: Content;
  status: "idle" | "loading" | "failed";
}

const initialState: ContentState = {
  content: { headline: "", bullets: [] },
  status: "idle"
};

/* load content async */
export const loadContentAsync = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const response: any = await fetchContent();
    // The value we return becomes the `fulfilled` action payload
    const bullets = response.data?.map(
      (bullet: { id: number; email: string }) => ({
        id: bullet.id,
        text: bullet.email
      })
    );
    return { headline: "", bullets };
  }
);

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    /* add new bullet */
    addBullet: (state) => {
      state.content.bullets.push({ id: uuidv4(), text: "" });
    },
    /* remove a bullet by it's ID */
    removeBullet: (state, action: PayloadAction<any>) => {
      const filteredBullets = state.content.bullets.filter(
        (bullet) => bullet.id !== action.payload
      );
      state.content.bullets = filteredBullets;
    },
    /* update a bullet by it's ID */
    updateBullet: (state, action: PayloadAction<Bullet>) => {
      const { id } = action.payload;
      const newBullets = state.content.bullets.map((bullet) => {
        if (bullet.id !== id) {
          return bullet;
        }
        return {
          ...action.payload
        };
      });
      state.content.bullets = newBullets;
    },
    /* update headline */
    updateHeadline: (state, action: PayloadAction<string>) => {
      state.content.headline = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadContentAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadContentAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.content = action.payload;
      })
      .addCase(loadContentAsync.rejected, (state) => {
        state.status = "failed";
      });
  }
});

export const {
  addBullet,
  removeBullet,
  updateHeadline,
  updateBullet
} = contentSlice.actions;

export const getContent = (state: RootState) => state.content;

export default contentSlice.reducer;

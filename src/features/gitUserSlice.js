import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create User
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://65757eb2b2fbb8f6509d274e.mockapi.io/info",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// getUser
export const getUser = createAsyncThunk(
  "getUser",
  async(args, { rejectWithValue }) => {
    
      const response = await fetch("https://65757eb2b2fbb8f6509d274e.mockapi.io/info");
 try {
  const result = await response.json();
  console.log(result)
  return result;

} catch (err) {
  return rejectWithValue(err.message || "Failed to fetch user data");
}
  }
);

// deleteUser
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async(id, { rejectWithValue }) => {
    
      const response = await fetch(`https://65757eb2b2fbb8f6509d274e.mockapi.io/info/${id}`,{
        method: "DELETE",
      });
 try {
  const result = await response.json();
  console.log(result)
  return result;

} catch (err) {
  return rejectWithValue(err.message || "Failed to fetch user data");
}
  }
);

// Edit user
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    console.log('data',data)
    const response = await fetch(
      `https://65757eb2b2fbb8f6509d274e.mockapi.io/info/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);


export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || "Failed to create user";
      })
        .addCase(getUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(getUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
        })
        .addCase(getUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload.message || "Failed to create user";
        })


        .addCase(deleteUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
          state.loading = false;

          // console.log("deletuser", action.payload);
          // console.log('id',id);
          
          const {id} = action.payload;
          if(id){
            state.user = state.user.filter(user => user.id!== id);
          }

        })
        .addCase(deleteUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload.message || "Failed to create user";
        })
        

        .addCase(updateUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = state.user.map((ele)=>
            ele.id === action.payload.id? {...action.payload} : ele
          )
        })

        .addCase(updateUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload.message || "Failed to create user";
        })
  },
});



export default userDetail.reducer;

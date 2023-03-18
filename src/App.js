import "./App.css";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/hoc/RequireAuth";
import AuthProvider from "./components/hoc/AuthProvider";
import LoginPage from "./components/LoginPage/LoginPage";
import BooksListPage from "./components/BooksListPage/BooksListPage";
import Error404 from "./components/Error404";
import Cart from "./components/Cart/Cart";
import StoreContextProvider from "./context/store-context";
import BookCard from "./components/BookCard/BookCard";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="App">
          <StoreContextProvider>
            <Routes>
              <Route path="/JS-book-lover" element={<LoginPage />} />
              <Route
                path="/books-list"
                element={
                  <RequireAuth>
                    <BooksListPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/books-list/:id"
                element={
                  <RequireAuth>
                    <BookCard />
                  </RequireAuth>
                }
              />
              <Route
                path="/cart"
                element={
                  <RequireAuth>
                    <Cart />
                  </RequireAuth>
                }
              />
              
              <Route path="*" element={<Error404 />} />
            </Routes>
          </StoreContextProvider>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;

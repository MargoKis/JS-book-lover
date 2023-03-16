import React from "react";
import list from "./BooksListPage.module.css";
// import { Link  } from 'react-router-dom';
import { booksData } from "../data";
import { useState } from "react";
import Navbar from "../Header/Navbar";
import BookCard from "../BookCard/BookCard";

const BooksListPage = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <section className={list.searching}>
        <form className={list.searchBox}>
          <input
            type="text"
            placeholder="search by book name"
            name="search-query"
            className={list.searchInput}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </section>

      <section className={list.container}>
        <div className={list.wrap}>
          {booksData
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return <BookCard data={val} />;
            })}
        </div>
      </section>
    </>
  );
};

export default BooksListPage;

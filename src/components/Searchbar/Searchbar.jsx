import React, { useState } from "react";

import AutoSuggest from "react-autosuggest";

// import { SearchInput, SearchBox, SearchIcon } from "./Searchbar.styled";
import api from "../../services/api";

import "./Searchbar.scss";

const Searchbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestionValue = (suggestion) => {
    return suggestion.title;
  };

  const renderSuggestion = (suggestion) => {
    return <span>{suggestion.title}</span>;
  };

  const loadSuggestions = (value) => {
    setIsLoading(true);

    // request
    api
      .get("content/titles/pt_BR/popular", {
        params: {
          body: `{"page_size": 5, "page": 1, "query": "${value}", "content_types": ["show", "movies"]}`,
        },
      })
      .then(({ data }) => {
        setIsLoading(false);
        setSuggestions(data.items);
      });
  };

  const handleChange = (_, { newValue }) => {
    setSearchValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    loadSuggestions(value);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Digite aqui seu filme/série favorito",
    value: searchValue,
    onChange: handleChange,
  };

  const status = isLoading ? "Loading..." : "Digite para receber sugestões";

  return (
    <>
      <div>
        <strong>Status: </strong> {status}
      </div>
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </>
  );
};

export default Searchbar;

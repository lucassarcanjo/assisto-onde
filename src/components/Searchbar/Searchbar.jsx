import React, { useState } from "react";

import AutoSuggest from "react-autosuggest";
import BounceLoader from "react-spinners/BounceLoader";

import {
  SearchInput,
  SearchSuggestions,
  SearchBox,
  SearchIcon,
} from "./Searchbar.styled";
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

  const renderInputComponent = (inputProps) => <SearchInput {...inputProps} />;

  const renderSuggestionsContainer = ({ containerProps, children }) => {
    return (
      <SearchSuggestions
        {...containerProps}
        isLoading={isLoading}
        suggestions={suggestions}
      >
        <BounceLoader size={70} color={"#E8E8E8"} loading={isLoading} />
        {children}
      </SearchSuggestions>
    );
  };

  return (
    <SearchBox>
      <SearchIcon />
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderInputComponent={renderInputComponent}
        renderSuggestionsContainer={renderSuggestionsContainer}
        inputProps={inputProps}
        highlightFirstSuggestion={true}
      />
    </SearchBox>
  );
};

export default Searchbar;

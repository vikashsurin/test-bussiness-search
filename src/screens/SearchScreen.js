import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// Import custom hooks
import useResults from "../hooks/useResults";

// Import api
import yelp from "../api/yelp";

// Import Components
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    // price === '$'  || '$$ ' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title='Cost Effective'
        />
        <ResultsList results={filterResultsByPrice("$$")} title='Bit Pricier' />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title='Big Spender'
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

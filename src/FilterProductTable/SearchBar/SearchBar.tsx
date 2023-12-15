import { Dispatch } from "react";

interface FilterProps {
  searchString?: string | undefined;
  checkBox?: boolean | undefined;
  changeCheckBox: Dispatch<React.SetStateAction<boolean>>;
  changeSearchString: Dispatch<React.SetStateAction<string>>;
}
function SearchBar(props: FilterProps) {
  function onChangeSearchString(e: React.ChangeEvent<HTMLInputElement>) {
    props.changeSearchString(e.target.value);
  }
  function onClickCheckBox() {
    props.changeCheckBox(!props.checkBox);
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.searchString}
        onChange={onChangeSearchString}
      />
      <label>
        {props.checkBox ? (
          <input type="checkbox" checked onClick={onClickCheckBox} />
        ) : (
          <input type="checkbox" onClick={onClickCheckBox} />
        )}{" "}
        Only show products in stock
      </label>
    </form>
  );
}
export default SearchBar;

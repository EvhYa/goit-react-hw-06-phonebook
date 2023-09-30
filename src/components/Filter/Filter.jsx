import { useDispatch, useSelector } from 'react-redux';
import { Container } from './Filter.styled';
import { getFilter } from 'redux/selector';
import { filterChange } from 'redux/filterSlice';

export function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Container>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        onChange={e => dispatch(filterChange(e.currentTarget.value))}
        id="filter"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Enter name you want to find"
      />
    </Container>
  );
}

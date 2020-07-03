import React from 'react';
import { useSelector } from 'react-redux';

import { selectEntryById } from './resultsSlice';
import Entry from '../Entry';

export default function EntryById({ entryId }) {
  const entry = useSelector(selectEntryById(entryId));
  return <Entry entry={entry}/>
}

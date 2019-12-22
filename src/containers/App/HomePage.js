import React, { useEffect } from 'react';
import tagAll from '../../api/tagAll';
import Filters from '../../components/Filters/Filters';
import FillInTheBlanks from '../../FillInTheBlanks/FillInTheBlanks';
import Heading from './Heading';
import { useAmplitude } from '../../instrumentation/AmplitudeHookProvider';
import { viewHome } from '../../instrumentation/events';

function HomePage({ fitbs, history, tags }) {
  const { logEvent } = useAmplitude();
  const { properties, type } = viewHome;

  useEffect(() => {
    logEvent(type, properties());
  }, [logEvent, properties, type]);

  return (
    <>
      <Heading title="TeamPrompts" />
      <Filters filter={tagAll} fitbs={fitbs} tags={tags} />
      <ul>
        {fitbs.map(fitb => (
          <li key={fitb.id}>
            <FillInTheBlanks fitb={fitb} history={history} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;

import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = props => <>
    <span className="tsd-signature-symbol">[</span>
  {props.elements.map((item, i) => <>{!Boolean(item.first) && <>            <span className="tsd-signature-symbol">, </span>
    </>}        {item.__partials__.type}
  </>)}    <span className="tsd-signature-symbol">]</span>
</>;

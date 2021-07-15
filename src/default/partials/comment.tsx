import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = props => <><With superProps="props" props="comment">
    {Boolean(props.hasVisibleComponent) && <>        <div className="tsd-comment tsd-typography">
        {Boolean(props.shortText) && <>                <div className="lead">
                    <Markdown>{props.shortText}</Markdown>
                </div>
        </>}{Boolean(props.text) && <>                <Markdown>{props.text}</Markdown>
        </>}{Boolean(props.tags) && <>                <dl className="tsd-comment-tags">
            {props.tags.map((item, i) => <>                        <dt>{item.tagName}</dt>
                        <dd><Markdown>{item.text}</Markdown></dd>
            </>)}                </dl>
        </>}        </div>
    </>}</With>
</>;

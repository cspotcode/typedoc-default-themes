import React from 'react';
export function With<A, B, C>(superProps: A, props: B, cb: (superProps: A, props: B, item: B) => C): C {
    return cb(superProps, props, props);
}

// export function IfCond<T>(props: {cond: string, children: T}) {
//     if(props.cond) return props.children;
//     else return undefined;
// }
export class IfCond extends React.Component<{cond: string}> {
    render() {
        if(this.props.cond) return this.props.children;
        else return undefined;
    }
}
export class IfNotCond extends React.Component<{cond: string}> {
    render() {
        if(!this.props.cond) return this.props.children;
        else return undefined;
    }
}

export {IfCond as IfSignature, IfNotCond as IfNotSignature};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            markdown: {}
            compact: {}
        }
    }
}
export function Markdown<T>(props: {children: T}) {
    return <markdown>{props.children}</markdown>;
}
export function Compact<T>(props: {children: T}) {
    return <compact>{props.children}</compact>;
}

import * as React from 'react';
import { Component, ReactElement } from 'react';
import { Value } from 'slate';
import { Editor } from 'slate-react';

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                kind: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        kind: 'text',
                        leaves: [{ text: 'A line of text in a paragraph.' }]
                    }
                ]
            }
        ]
    }
});

class SlateEditor extends Component<any, ISlateEditorState> {
    public state: ISlateEditorState = {
        value: initialValue
    };

    public render(): ReactElement<HTMLElement> {
        return (
                <Editor
                    value={this.state.value}
                    onChange={this.handleChange}
                />
        );
    }

    private handleChange = (value: any) => {
        this.setState({
            value
        });
    }
}

interface ISlateEditorState {
    value?: any;
}

export default SlateEditor;

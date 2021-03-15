import React from "react";
import MDEditor from '@uiw/react-md-editor';

export default function CreateBlog() {
    const markdown = () =>
`# Header

# Header

## Sub-header?

### Sub-sub-header?

#### Sub-sub-sub-header?

##### Sub-sub-sub-sub-header?

*Italics!*

**Bold**

>Block Quote

~~StrikeThrough~~

\`code formatting\`

[link](home)

![](https://i1.sndcdn.com/avatars-000307312417-a7mxgu-t500x500.jpg)`;

    const [value, setValue] = React.useState(markdown);
    return (
        <div>
            <MDEditor
                value={value}
                onChange={setValue}
                height={1500}
            />
            <br/>
            <MDEditor.Markdown source={value} />
            <br/>
        </div>
    );
}

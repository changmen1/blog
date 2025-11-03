import { FC, useEffect, useState } from "react";
import MarkdownIt from 'markdown-it';
import MdEditor, { Plugins } from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { Button, Flex, Input, message } from "antd";
import { getInsertImage, SaveMd } from "./service";
import { SendOutlined } from "@ant-design/icons";
import { updateBlog } from "../ManageBlog/service";

// TODO https://github.com/HarryChen0506/react-markdown-editor-lite/blob/master/README.md
// TODO https://harrychen0506.github.io/react-markdown-editor-lite/

type EditorChange = {
  text: string;
  html: string;
}

type Props = {
  mentity: MarkdownBlog.IMdBlog
}

const Markdown: FC<Props> = ({ mentity }) => {

  const [md, setMd] = useState<string>()
  const [title, setTitle] = useState<string>()
  const [author, setAuthor] = useState<string>()

  const mdParser = new MarkdownIt(/* Markdown-it options */);

  // 启用图片插件
  MdEditor.use(Plugins.Image);

  function handleEditorChange({ html, text }: EditorChange) {
    setMd(text)
  }

  // 上传图片
  const handleImageUpload = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await getInsertImage(formData)
      return res.url;
    } catch (err) {
      message.error("图片上传失败");
      throw err;
    }
  };

  const handleSave = async () => {
    const data = await SaveMd({
      title: title ?? "文章标题",
      contentMd: md ?? "作者发布了一个空的内容",
      // TODO 暂不考虑使用HTML渲染前台
      contentHtml: "",
      author: author ?? "朱昕龙"
    })
    message.success(data.msg)
  }

  const handleUpdate = async () => {
    const data = await updateBlog({
      id: mentity.id,
      title: title ?? "文章标题",
      contentMd: md ?? "作者发布了一个空的内容",
      contentHtml: "",
      author: author ?? "朱昕龙"
    })
    message.success(data.msg)
  }

  useEffect(() => {
    if (mentity) {
      setTitle(mentity.title);
      setAuthor(mentity.author);
      setMd(mentity.contentMd); // 回显 markdown 内容
    }
  }, [mentity])

  return (
    <>
      <Flex>
        <Input placeholder="标题内容" value={title} onChange={(value) => setTitle(value.target.value)} />
        <Input placeholder="作者" value={author} onChange={(value) => setAuthor(value.target.value)} />
        {
          mentity
            ? <Button onClick={handleUpdate} type="primary" icon={<SendOutlined />} size={"large"}>
              更新
            </Button>
            :
            <Button onClick={handleSave} type="primary" icon={<SendOutlined />} size={"large"}>
              发布
            </Button>
        }
      </Flex>
      <MdEditor style={{ height: "calc(100vh - 136px)" }} value={md} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} onImageUpload={handleImageUpload} />
    </>
  )
}

export default Markdown;

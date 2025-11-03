import { FC, useEffect } from "react";
import { Button, Card } from "antd";
import Quill from "quill";
import "quill/dist/quill.snow.css";

let quill: any = null;

// TODO 参考文章 https://blog.csdn.net/m0_68633070/article/details/129064119
// TODO 中文API https://www.kancloud.cn/liuwave/quill/1409369
// TODO 英文API https://quilljs.com/playground/react
const RichText: FC = () => {
  //富文本modules配置
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // 加粗，斜体，下划线，删除线
    ["blockquote", "code-block"], // 引用，代码块
    [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
    [{ list: "ordered" }, { list: "bullet" }], // 列表
    [{ script: "sub" }, { script: "super" }], // 上下标
    [{ indent: "-1" }, { indent: "+1" }], // 缩进
    [{ direction: "rtl" }], // 文本方向
    [{ size: ["small", false, "large", "huge"] }], // 字体大小
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // 几级标题
    [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
    [{ font: [] }], // 字体
    [{ align: [] }], // 对齐方式
    ["clean"], // 清除字体样式
    ["image", "video"], // 上传图片、上传视频
  ];

  //富文本配置
  const options = {
    modules: {
      toolbar: toolbarOptions,
    },
    placeholder: "请输入...",
    theme: "snow",
  };

  const handleSave = () => {
    if (quill) {
      const html = quill.root.innerHTML; // 获取HTML
      const text = quill.getText();      // 获取纯文本
      const delta = quill.getContents(); // 获取Delta格式

      console.log("HTML:", html);
      console.log("Text:", text);
      console.log("Delta:", delta);

      // TODO: 在这里发请求上传内容，比如：
      // axios.post("/api/save", { content: html });
    }
  };

  useEffect(() => {
    quill = new Quill("#editor2", options);
  }, [])

  return (
    <Card>
      <div id="editor2" />
      <Button onClick={handleSave}>保存上传</Button>
    </Card>
  )
}

export default RichText;

import { ActionType, ProColumns, ProTable } from "@ant-design/pro-components";
import { Button, message, Modal, Popconfirm, Space } from "antd";
import { FC, useRef, useState } from "react";
import { getBlogList, remove } from "./service";
import Markdown from "@/pages/nursing/Markdown"

const ManageBlog: FC = () => {
  const formRef = useRef<any>(undefined);
  const actionRef = useRef<ActionType>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mentity, setMentity] = useState<MarkdownBlog.IMdBlog>()
  const [confirmLoading, setConfirmLoading] = useState(false);


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    actionRef.current?.reload()
  };

  /**表格列配置 */
  const columns: ProColumns<MarkdownBlog.IMdBlog>[] = [
    {
      title: '作者',
      dataIndex: 'author',
      align: 'center',
    },
    {
      title: '标题内容',
      dataIndex: 'title',
      align: 'center',
      search: false
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      align: 'center',
      valueType: 'dateTime',
      search: false
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      align: 'center',
      valueType: 'dateTime',
      search: false
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      align: 'center',
      fixed: 'right',
      render: (_, entity) => (
        <Space>
          <Button
            size="small"
            type="primary"
            onClick={() => {
              setMentity(entity)
              showModal()
            }}
          >
            预览更新
          </Button>
          <Popconfirm
            title="删除博客"
            description="是否确认删除此条博客"
            // open={open}
            key={'export'}
            onConfirm={async () => {
              setConfirmLoading(true)
              const data = await remove([entity.id])
              message.info(data.msg)
              setConfirmLoading(false);
              actionRef.current?.reload();
            }}
            okButtonProps={{ loading: confirmLoading }}
          >
            <Button size="small" color="danger" variant="solid">
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <ProTable<MarkdownBlog.IMdBlog>
        columns={columns}
        actionRef={actionRef}
        formRef={formRef}
        cardBordered
        request={async (params) => {
          const { current, pageSize, author } =
            params;
          const pageParams = {
            pageNum: current as number,
            pageSize: pageSize as number,
            author
          };
          const { rows, total } = await getBlogList(pageParams);
          return {
            data: rows,
            success: true,
            total: Number(total),
          };
        }}
        editable={{
          type: 'multiple',
        }}
        tableAlertOptionRender={false}
        rowKey="id"
        search={{
          labelWidth: 'auto',
          optionRender: (searchConfig, formProps, dom) => [
            ...dom.reverse(),
          ],
        }}
        options={false}
        pagination={{
          showSizeChanger: true,
          defaultPageSize: 10,
        }}
      />
      <Modal
        title="预览编辑"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"100%"}
      >
        {
          mentity && <Markdown mentity={mentity} />
        }
      </Modal>
    </>
  )
}

export default ManageBlog;

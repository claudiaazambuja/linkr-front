import { deletePost } from "../../services/apiPosts";


export const handleDelete = async (postId, token, refreshContext, setIsModalOpen) => {
<<<<<<< Updated upstream
    console.log('postId:', postId)
    console.log('posttoken:', token)
    console.log(refreshContext)
    try {
        await deletePost(postId, token);
        console.log( 'Post excluído com sucesso'); 
        setIsModalOpen(false);
        refreshContext.setRefresh(prevRefresh => !prevRefresh);
    } catch (error) {
        console.error('Erro ao excluir o post:', error);
        // Lide com o erro, se necessário
    }
=======

  try {
    await deletePost(postId, token);
    console.log("Post excluído com sucesso");
    setIsModalOpen(false);
    refreshContext.setRefresh((prevRefresh) => !prevRefresh);
    window.location.reload();
  } catch ({ message }) {
    alert(message?.data || message);
}
>>>>>>> Stashed changes
};

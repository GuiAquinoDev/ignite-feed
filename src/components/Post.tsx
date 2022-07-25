import { format , formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import styles from "./Post.module.css";

import {Comment} from './Comment'
import { Avatar } from "./Avatar";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface PostProps{
  author: Author;
  publishedAt: Date;
}

export function Post(props:PostProps) {

  const [comments, setComments] = useState(['show']);

  const [newCommentText, setNewCommentText] = useState('')
  console.log(newCommentText)

  const publishedDateFormatted = format(props.publishedAt,
  "d 'de' LLLL 'às' HH:mm'h'",{locale: ptBR})
  
  const publishedDateRelative = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })


  function handleCreateNewComment(event:FormEvent) {
    event.preventDefault()
    
    setComments([...comments, newCommentText])
    setNewCommentText('');
  }

  function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')

  }

  function deleteComment(commentToDelete:string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

      setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0 

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar  src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} 
        dateTime={props.publishedAt.toISOString()}>
         {publishedDateRelative}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um</p>
        projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é
        DoctorCare 🚀
        <p>
          👉<a> jane.design/doctorcare</a>
        </p>
        <p>
          <a>#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit"
            disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>

        <div className={styles.commentList}>
        {comments.map(comment => {
          return (<Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />)
          })}      
        </div>
    </article>
  );
}

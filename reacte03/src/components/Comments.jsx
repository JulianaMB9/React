import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comments.modules.css"

export function Comments() {
    return (
        <div className={styles.Commets}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png" alt="" />
            <div className={styles.CommetsBox}>
                <div className={styles.CommentsContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Juliana belmrio</strong>
                            <time
                                title='02/04/2024'
                                dateTime='02/04/2024'
                            >Publicado há 1 hora</time>
                            <div>
                                <button title="Excluir comentário">
                                    <Trash />
                                </button>
                            </div>
                        </div>

                    </header>
                    <p>Muito bom, parabens pela realização do curso </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Gostei <span>20</span>
                    </button>
                </footer>
            </div>


        </div>
    )


}

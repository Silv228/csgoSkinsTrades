import { IResponse } from '@/interfaces/championsFull.interface'
import styles from './page.module.css'
import { api } from '@/app/api/api'
import { Metadata } from 'next'
import ChampionsPage from '../Components/ChampionsPage/ChampionsPage'

export const metadata: Metadata = {
  title: 'Чемпионы Лиги Легенд',
  description: 'Здесь собраны все чемпионы игры Лига Легенд)))'
}
export default async function Champions() {
  const res: IResponse = await api.getChampions()
  const champArray = Object.entries(res.data).map(e => (e[1]))
  return (
    <main className={styles.main}>
      <ChampionsPage champArray={champArray} />
    </main>
  )
}

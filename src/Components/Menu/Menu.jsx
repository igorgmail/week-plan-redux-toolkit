import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { Container, Button, Grid, GridItem } from '@chakra-ui/react'

import { setMenu } from "../../store/reducers/appReducer"

const Menu = React.memo(() => {
  console.log("---Render Menu");

  const dispatch = useDispatch()
  const activeMenu = useSelector((store) => store.app.menu)

  const menuToogleHandler = (value) => {
    if (value === 1) dispatch(setMenu('done'))
    if (value === 2) dispatch(setMenu('all'))
    if (value === 3) dispatch(setMenu('work'))
  }

  return (
    <>
      <Container>
        <Grid templateColumns={['1fr 1fr 1fr', '1fr 1fr 1fr']} gap={2} mt={'0.5rem'}>
          <GridItem w='100%' h='10'  >
            <Button
              transform={activeMenu === 'done' && 'translateY(-10px)'}
              w={'100%'} backgroundColor={'custom.task_done'} color={'white'} fontSize={['.8rem', '1rem']} size='md'
              onClick={() => menuToogleHandler(1)}>Завершенно</Button>
          </GridItem>
          <GridItem w='100%' h='10' rowSpan={1} >
            <Button
              transform={activeMenu === 'all' && 'translateY(-10px)'}
              w={'100%'} backgroundColor={'custom.task_all'} color={'white'} fontSize={['.8rem', '1rem']}
              onClick={() => menuToogleHandler(2)}>Все задачи</Button>
          </GridItem>
          <GridItem w='100%' h='10'  >
            <Button
              transform={activeMenu === 'work' && 'translateY(-10px)'}
              w={'100%'} backgroundColor={'custom.task_todo'} color={'white'} fontSize={['.8rem', '1rem']} size='md'
              onClick={() => menuToogleHandler(3)}>Сделать</Button>
          </GridItem>

        </Grid>

    </Container>
    </>
  )
})

export default Menu
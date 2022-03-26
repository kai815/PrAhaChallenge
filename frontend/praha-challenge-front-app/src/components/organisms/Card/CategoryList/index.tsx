import { styled } from '../../../../../stitches.config';
import Text from '@/components/atoms/Text';
import CardOutLine from '@/components/atoms/CardOutLine';

type Category = {
  name: string;
  key: number;
};

export type PropsType = {
  categories: Category[];
  className?: string;
};

const ListItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
});

const CategoryListCard = ({ categories, className = '' }: PropsType) => {
  return (
    <CardOutLine
      paddingXSize='s'
      paddingYSize='s'
      maxWidth='s'
      flexDirection='column'
      className={className}
    >
      <ul>
        {categories.map((category) => (
          <ListItem key={category.key}>
            <Text as='span' weight='bold' color='grey700' size='base'>
              - {category.name}
            </Text>
          </ListItem>
        ))}
      </ul>
    </CardOutLine>
  );
};

export default CategoryListCard;

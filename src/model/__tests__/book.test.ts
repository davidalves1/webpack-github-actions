import Book from '../book';

const mockName = 'Harry Potter';
const mockPrice = 159.90;

describe('Books Model', () => {
  it('should get the correct name and price from book', () => {
    const book = new Book(mockName, mockPrice);

    expect(book.getName()).toBe(mockName)
    expect(book.getPrice()).toBe(mockPrice)
  });
});

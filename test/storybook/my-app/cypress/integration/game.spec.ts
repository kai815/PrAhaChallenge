describe('OXゲームで勝敗が決定した時のテスト', function () {
  //ホームURLに訪れる
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('Xが勝利', () => {
    //最初のターンで左上のボタンをクリック
    cy.get('[data-e2e="button-0"]').click().get('[data-e2e="button-0"]').should('have.text', 'X')
    //その次のターンで一番上の真ん中をクリック
    cy.get('[data-e2e="button-1"]').click().get('[data-e2e="button-1"]').should('have.text', 'O')
    //その次のターン一番左の列の真ん中の段をクリック
    cy.get('[data-e2e="button-3"]').click().get('[data-e2e="button-3"]').should('have.text', 'X')
    //その次のターン一番真ん中の真ん中の段をクリック
    cy.get('[data-e2e="button-4"]').click().get('[data-e2e="button-4"]').should('have.text', 'O')
    //その次のターンで左下をクリック
    cy.get('[data-e2e="button-6"]').click().get('[data-e2e="button-6"]').should('have.text', 'X')
    //Xが勝利
    cy.get('[data-e2e="status"]').should('have.text', 'Winner: X')
  });

  it('Oが勝利', () => {
    //最初のターンで左上のボタンをクリック
    cy.get('[data-e2e="button-0"]').click().get('[data-e2e="button-0"]').should('have.text', 'X')
    //その次のターンで一番上の真ん中をクリック
    cy.get('[data-e2e="button-1"]').click().get('[data-e2e="button-1"]').should('have.text', 'O')
    //その次のターン右上をクリック
    cy.get('[data-e2e="button-2"]').click().get('[data-e2e="button-2"]').should('have.text', 'X')
    //その次のターンで真ん中の真ん中の段をクリック
    cy.get('[data-e2e="button-4"]').click().get('[data-e2e="button-4"]').should('have.text', 'O')
    //その次のターンで左下をクリック
    cy.get('[data-e2e="button-6"]').click().get('[data-e2e="button-6"]').should('have.text', 'X')
    //その次のターンで一番下の真ん中をクリック
    cy.get('[data-e2e="button-7"]').click().get('[data-e2e="button-7"]').should('have.text', 'O')
    //Oが勝利
    cy.get('[data-e2e="status"]').should('have.text', 'Winner: O')
  });

  it('引き分け', () => {
    //最初のターンで左上のボタンをクリック
    cy.get('[data-e2e="button-0"]').click().get('[data-e2e="button-0"]').should('have.text', 'X')
    //その次のターンで一番上の真ん中をクリック
    cy.get('[data-e2e="button-1"]').click().get('[data-e2e="button-1"]').should('have.text', 'O')
    //その次のターン右上をクリック
    cy.get('[data-e2e="button-2"]').click().get('[data-e2e="button-2"]').should('have.text', 'X')
    //その次のターンで真ん中の真ん中の段をクリック
    cy.get('[data-e2e="button-4"]').click().get('[data-e2e="button-4"]').should('have.text', 'O')
    //その次のターンで一番下の真ん中をクリック
    cy.get('[data-e2e="button-7"]').click().get('[data-e2e="button-7"]').should('have.text', 'X')
    //その次のターンで一番左の列の真ん中の段をクリック
    cy.get('[data-e2e="button-3"]').click().get('[data-e2e="button-3"]').should('have.text', 'O')
    //その次のターンで一番右の真ん中の段をクリック
    cy.get('[data-e2e="button-5"]').click().get('[data-e2e="button-5"]').should('have.text', 'X')
    //その次のターンで右下をクリック
    cy.get('[data-e2e="button-8"]').click().get('[data-e2e="button-8"]').should('have.text', 'O')
    //その次のターンで左下をクリック
    cy.get('[data-e2e="button-6"]').click().get('[data-e2e="button-6"]').should('have.text', 'X')
    //引き分け
    cy.get('[data-e2e="status"]').should('have.text', 'Draw!')
  });
});

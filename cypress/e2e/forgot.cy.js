//   ---------- Fitur Reset Password ------------

describe('Forgot Your Password Feature', () => {

    beforeEach(() => {
      // Mengunjungi halaman login sebelum setiap test
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });
  
    it('User Successfull Reset Password with Valid Username', () => {
      // Memastikan tombol 'Forgot your password?' terlihat
      cy.contains('Forgot your password?').should('be.visible');
      
      // Klik tombol 'Forgot your password?'
      cy.contains('Forgot your password?').click();
      
      // Memastikan halaman pemulihan password terbuka dengan URL yang benar
      cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
      
      // Memastikan form reset password terlihat
      cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
      cy.get('input[name="username"]').type('Admin');  // Memastikan input email terlihat
      cy.get('button[type="submit"]').should('be.visible');  // Memastikan tombol submit terlihat
      cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
      cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password link sent successfully')
    });
    
    it('User Successfull Reset Password with Different Username', () => {
        // Memastikan tombol 'Forgot your password?' terlihat
        cy.contains('Forgot your password?').should('be.visible');
        
        // Klik tombol 'Forgot your password?'
        cy.contains('Forgot your password?').click();
        
        // Memastikan halaman pemulihan password terbuka dengan URL yang benar
        cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
        
        // Memastikan form reset password terlihat
        cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
        cy.get('input[name="username"]').type('Adminn');  // Memastikan input email terlihat
        cy.get('button[type="submit"]').should('be.visible');  // Memastikan tombol submit terlihat
        cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password link sent successfully')
    });

    // Cancel Forgot Password
    
    it('User Cancel for Reset The Password', () => {
        // Memastikan tombol 'Forgot your password?' terlihat
        cy.contains('Forgot your password?').should('be.visible');
        
        // Klik tombol 'Forgot your password?'
        cy.contains('Forgot your password?').click();
        
        // Memastikan halaman pemulihan password terbuka dengan URL yang benar
        cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
        
        // Memastikan form reset password terlihat
        cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
        cy.get('input[name="username"]').type('Admin');  // Memastikan input email terlihat
        cy.get('button[type="submit"]').should('be.visible');  // Memastikan tombol submit terlihat
        cy.get('[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]').click();
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login')
    });
 
// --- Gagal Reset Password tanpa input username ---

it('Users Cannot Reset Password without input Username', () => {
        // Memastikan tombol 'Forgot your password?' terlihat
        cy.contains('Forgot your password?').should('be.visible');
      
        // Klik tombol 'Forgot your password?'
        cy.contains('Forgot your password?').click();
      
        // Memastikan halaman pemulihan password terbuka dengan URL yang benar
        cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
        // Memastikan form reset password terlihat
        cy.get('h6').should('contain.text', 'Reset Password');  // Memastikan teks pada halaman reset password
        // Mengisi username kosong
        cy.get('[name="username"]')
        // Mengklik tombol Reset Password
        cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })
  
  });
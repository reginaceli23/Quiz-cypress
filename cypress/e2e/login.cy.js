
describe('Login Feature',() => {
    it('User Login with Valid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    })

    it('User Login with Invalid Username', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username yang salah
        cy.get('[name="username"]').type('Adminn');  // Username yang salah
        // Mengisi password yang benar
        cy.get('[name="password"]').type('admin123');  // Password yang benar (misalnya)
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');  // Memastikan pesan error tampil
      });

      it('User login without input Username and Password', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        // Mengklik tombol login tanpa mengisi username dan password
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        
        // Memastikan pesan error muncul pada kolom username yang kosong
        cy.get('input[name="username"]').then(($input) => {
          if ($input.hasClass('oxd-input--error')) {
            cy.get('.oxd-input-field-error-message')
              .should('be.visible')
              .and('contain.text', 'Required');  // Memastikan pesan error 'Required' pada kolom username
          }
        });
      
        // Memastikan pesan error muncul pada kolom password yang kosong
        cy.get('input[name="password"]').then(($input) => {
          if ($input.hasClass('oxd-input--error')) {
            cy.get('.oxd-input-field-error-message')
              .should('be.visible')
              .and('contain.text', 'Required');  // Memastikan pesan error 'Required' pada kolom password
          }
        });
    });

    it('User Login dengan username kosong dan password benar', () => {
        // Mengunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // Memastikan halaman login dimuat
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        // Mengisi username kosong
        cy.get('[name="username"]'); // Biarkan kolom username kosong
        // Mengisi password benar
        cy.get('[name="password"]').type('admin123');  // password yang benar
        // Mengklik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        // Memastikan error message atau kondisi lain yang mengindikasikan login gagal
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })

    
})


//  <reference types="cypress" />

describe('Login Feature', () => {
    // Test Case 1: Verify Login Page Loads Correctly
    it('should load the login page successfully', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Ganti URL sesuai dengan aplikasi Anda
      cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login'); // Periksa judul halaman
    });

  
    // Test Case 2: Valid Login
    it('should login with valid credentials', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Input Username dan Password
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
  
      // Klik tombol login
      cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
  
      // Verifikasi direct ke halaman dashboard
    //   cy.url().should('include', '/dashboard');
      cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text', 'Dashboard'); // Pastikan dashboard tampil
    });

  
    // Test Case 3: Invalid Login
    it('should display an error with invalid credentials', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Input Username dan Password salah
      cy.get('input[name="username"]').type('Admin1');
      cy.get('input[name="password"]').type('admin12');
  
      // Klik tombol login
      cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
  
      // Verifikasi pesan kesalahan
      cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('have.text', 'Invalid credentials');
        // .and('have.text', 'Invalid username or password.');
    });

    // Test Case 4: Without Credential
      it('should display an error when username and password are empty', () => {
        // Kunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // URL login aplikasi
        
        // Klik tombol login tanpa input
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click(); // Sesuaikan class-name dengan yang ditemukan pada DOM
    
        // Verifikasi pesan error untuk username
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]') // Selector untuk pesan username kosong
          .should('be.visible')
          .and('contain.text', 'Required');
    
        // Verifikasi pesan error untuk password
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]') // Selector untuk pesan password kosong
          .should('be.visible')
          .and('contain.text', 'Required');
      });


    // Test Case 5: Login username is empty
    it('should display an error when username is empty', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="password"]').type('admin123');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
          .should('be.visible')
          .and('have.text', 'Required');
      });

    // Test Case 6: Login password is empty
    it('should display an error when password is empty', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
          .should('be.visible')
          .and('have.text', 'Required');
      });

    // Test Case 7: Invalid Login input username with special character
    it('should display an error message when username contains special characters', () => {
        // Step 1: Kunjungi halaman login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // URL halaman login
    
        // Step 2: Input username dengan karakter spesial
        cy.get('input[name="username"]').type('!@#$%^&*()_+{}|:"<>?'); // Selector input username
    
        // Step 3: Input password valid (untuk kelengkapan tes)
        cy.get('input[name="password"]').type('admin123'); // Selector input password
    
        // Step 4: Klik tombol login
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click(); // Selector untuk tombol login
    
        // Step 5: Verifikasi pesan error ditampilkan
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]') //Selector untuk elemen pesan error
          .should('be.visible') // Pastikan pesan error terlihat
          .and('contain.text', 'Invalid credentials'); // Ganti teks sesuai pesan error aplikasi Anda
      });

      // Test case 8: Login gagal dengan password kombinasi karakter spesial yang salah
  it('Should not allow login with invalid special character password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    // Input username valid
    cy.get('[name="username"]').type('Admin');

    // Input password dengan kombinasi karakter spesial yang salah
    cy.get('[name="password"]').type('##***');

    // Klik tombol Login
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

    // Verifikasi jika login gagal dan pesan error ditampilkan
    cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
      .should('be.visible')
      .and('contain.text', 'Invalid credentials'); // Ganti teks sesuai aplikasi
  });

      // Test case 9: Invalid Login gagal username salah 
  it('should display an error with invalid credentials', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Input Username dan Password salah
      cy.get('input[name="username"]').type('testadmin');
      cy.get('input[name="password"]').type('admin123');
  
      // Klik tombol login
      cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
  
      // Verifikasi pesan kesalahan
      cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('be.visible')
        .and('contain.text', 'Invalid credentials');
    });


      // Test case 10: Invalid Login unregistered account 
    it('Should not allow login with unregistered account', () => {
      // Kunjungi halaman login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Inputkan username tidak terdaftar
      cy.get('[name="username"]').type('account1');
  
      // Inputkan password tidak terdaftar
      cy.get('[name="password"]').type('user123');
  
      // Klik tombol Login
      cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
  
      // Verifikasi login gagal dengan pesan error
      cy.get('.oxd-alert-content') // Selector untuk pesan error
        .should('be.visible') // Memastikan pesan terlihat
        .and('contain.text', 'Invalid credentials'); // Ganti teks sesuai aplikasi
    });

      // Test Case 11: Test Fungsi Enter Key untuk Login
    it('Should log in when the Enter key is pressed', () => {
      // Kunjungi halaman login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      // Inputkan username valid
      cy.get('[name="username"]').type('Admin'); // Username yang valid
  
      // Inputkan password valid
      cy.get('[name="password"]').type('admin123'); // Password yang valid
  
      // Tekan tombol Enter untuk login (tanpa klik tombol Login)
      cy.get('[name="password"]').type('{enter}'); // Menggunakan key "Enter" setelah mengetik password
  
      // Verifikasi pengalihan ke halaman dashboard
      cy.url().should('include', '/dashboard'); // Verifikasi halaman menuju dashboard setelah login berhasil
      cy.get('.oxd-topbar-header-title').should('contain.text', 'Dashboard'); // Memastikan bahwa judul halaman dashboard muncul
    });

      // Test case 12: User memilih forgot password
    it('Users select forgot password', () => {

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      // Memastikan tombol 'Forgot your password?' terlihat
      cy.contains('Forgot your password?').should('be.visible');
    
      // Klik tombol 'Forgot your password?'
      cy.contains('Forgot your password?').click();
    
      // Memastikan halaman pemulihan password terbuka dengan URL yang benar
      cy.url().should('include', '/requestPasswordResetCode');  // Pastikan URL mengandung "/resetPassword"
    });


    it('Users select cta OrangeHRM, Inc', () => {

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      // Memastikan tombol 'Forgot your password?' terlihat
      cy.contains('OrangeHRM, Inc').should('be.visible');
    
      // Klik tombol 'Forgot your password?'
      cy.contains('OrangeHRM, Inc').click();
    
      // Memastikan halaman pemulihan password terbuka dengan URL yang benar
      // cy.url().should('include', 'https://www.orangehrm.com/orangehrm.com');  // Pastikan URL mengandung "/resetPassword"
    });
  


  


  

    

});
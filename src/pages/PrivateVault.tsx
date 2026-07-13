import "./PrivateVault.css";

export default function PrivateVault() {
  return (
    <main className="private-vault">

      <div className="vault-card">

        <div className="vault-icon">
          🔒
        </div>

        <h1>
          Private Vault
        </h1>

        <p>
          Protect your private conversations with a password.
        </p>

        <button
          className="vault-btn"
          type="button"
        >
          Create Vault
        </button>

      </div>

    </main>
  );
}
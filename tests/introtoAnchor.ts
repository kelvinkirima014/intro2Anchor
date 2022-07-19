import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { IntrotoAnchor } from "../target/types/introto_anchor";

describe("introtoAnchor", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.IntrotoAnchor as Program<IntrotoAnchor>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});

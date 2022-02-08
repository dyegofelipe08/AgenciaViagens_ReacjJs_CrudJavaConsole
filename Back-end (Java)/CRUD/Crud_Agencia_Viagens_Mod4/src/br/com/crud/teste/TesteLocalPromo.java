package br.com.crud.teste;

import java.util.Scanner;

import br.com.crud.dao.LocalPromoDAO;
import br.com.crud.models.LocalPromo;

public class TesteLocalPromo {

	public static void main(String[] args) {


		LocalPromoDAO localPromoDAO = new LocalPromoDAO();
		LocalPromo localPromo = new LocalPromo();
		
		String descricao;
		double preco;
		int id1=0, id2=0, op = 0;
		Scanner s = new Scanner(System.in);

		do {
			System.out.println("Escolha uma das opções: ");
			System.out.println(
					"1 - CADASTRAR LOCAL PROMOCIONAL AO PEDIDO\n2 - ATUALIZAR LOCAL PROMOCIONAL\n3 - REMOVER LOCAL PROMOCIONAL\n4 - LISTAR LOCAIS PROMOCIONAIS CADASTRADOS");
			op = Integer.parseInt(s.nextLine());

			if (((op <= 0) || (op > 5)))
				System.out.println("Opção inválida!");

		} while ((op <= 0) || (op > 5));

		if (op == 1) {
		
				System.out.println("-------------  CADASTRAR LOCAL AO PEDIDO ------------");
				
				System.out.print("Digite a descrição do local (Nome da cidade e estado):");
				localPromo.setDescricaoPromo(descricao = s.nextLine());
				System.out.print("Digite o preço da passagem para atrelar ao local: ");
				localPromo.setPrecoPromo(preco = Double.parseDouble(s.nextLine()));
				System.out.print("Digite o ID do Pedido que deseja atrelar a este local:");
				localPromo.setIdPedidoPromo(id2 = Integer.parseInt(s.nextLine()));
				
				localPromoDAO.save(localPromo);
				
				System.out.println("Local cadastrado com sucesso!");

		} else if(op == 2) {
			
			System.out.println("-------------  ATUALIZAR LOCAL PROMOCIONAL ------------");
			
			System.out.print("Digite o ID do local a ser atualizado: ");
			localPromo.setIdLocalPromo(id1 = Integer.parseInt(s.nextLine()));
			System.out.print("Digite a descrição do local  (Nome da cidade e estado): ");
			localPromo.setDescricaoPromo(descricao = s.nextLine());
			System.out.print("Digite o preço da passagem para atrelar ao local: ");
			localPromo.setPrecoPromo(preco = Double.parseDouble(s.nextLine()));
			System.out.print("Digite o ID do Pedido que deseja atrelar a este local:");
			localPromo.setIdPedidoPromo(id2 = Integer.parseInt(s.nextLine()));
			
			localPromoDAO.update(localPromo);
			
			System.out.println("Local atualizado com sucesso!");		
			
			
		}else if (op==3) {
			
			System.out.println("-------------  REMOVER LOCAL PROMOCIONAL ------------");
			
			System.out.print("Digite o ID do pedido que você deseja remover: ");
			localPromo.setIdPedidoPromo(id1 = Integer.parseInt(s.nextLine()));
			localPromoDAO.removeByID(id1);
			System.out.println("Local removido com sucesso!");
			
		}else {
			
			System.out.println("---------------- LOCAIS PROMOCIONAIS CADASTRADOS -----------------");
			System.out.println();
			
			for (LocalPromo l : localPromoDAO.getLocaisPromo()) {

				System.out.println("ID LOCAL: "+l.getIdLocalPromo()+"\nDESCRIÇÃO DO LOCAL: "+l.getDescricaoPromo()+"\nPREÇO: R$ "+l.getPrecoPromo()+     
						"\nN. PEDIDO: " + l.getPedidoPromo().getIdPedidoPromo() + " \nDATA DO PEDIDO: " + l.getPedidoPromo().getDataPedidoPromo()
						+ "\nID CLIENTE: " + l.getPedidoPromo().getCliente().getIdCliente() + "\nCLIENTE: " + l.getPedidoPromo().getCliente().getNome()
						+ "\nCPF: " + l.getPedidoPromo().getCliente().getCpf() + "\nTELEFONE: " + l.getPedidoPromo().getCliente().getTelefone()
						+ "\nEMAIL: " + l.getPedidoPromo().getCliente().getEmail());
				
				System.out.println("--------------------------------------------------------");

			}
			
			
			
			System.out.println("Estes são todos os locais cadastrados no banco de dados. Obrigado!");
			
		}
		
		
	}

}

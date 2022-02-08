package br.com.crud.teste;

import java.util.Date;
import java.util.Scanner;

import br.com.crud.dao.PedidoPromoDAO;
import br.com.crud.models.PedidoPromo;

public class TestePedidoPromo {

	public static void main(String[] args) {

		PedidoPromoDAO pedidoPromoDAO = new PedidoPromoDAO();
		
		PedidoPromo pedidoPromo = new PedidoPromo();
		
		
		int id1=0, id2=0, op = 0;
		Scanner s = new Scanner(System.in);

		do {
			System.out.println("Escolha uma das opções: ");
			System.out.println(
					"1 - CADASTRAR PEDIDO PROMOCIONAL\n2 - ATUALIZAR PEDIDO PROMOCIONAL\n3 - REMOVER PEDIDO PROMOCIONAL\n4 - LISTAR PEDIDOS PROMOCIONAIS CADASTRADOS");
			op = Integer.parseInt(s.nextLine());

			if (((op <= 0) || (op > 5)))
				System.out.println("Opção inválida!");

		} while ((op <= 0) || (op > 5));

		if (op == 1) {
		
				
				System.out.println("-------------  CADASTRAR PEDIDO PROMOCIONAL ------------");
				System.out.print("Digite o ID do cliente que deseja atrelar ao pedido:");
				pedidoPromo.setIdCliente(id1 = Integer.parseInt(s.nextLine()));
				pedidoPromo.setDataPedidoPromo(new Date());
				
				pedidoPromoDAO.save(pedidoPromo);
				
				System.out.println("Pedido cadastrado com sucesso!");

		} else if(op == 2) {
			
			System.out.println("-------------  ATUALIZAR PEDIDO ------------");
			
			
			pedidoPromo.setDataPedidoPromo(new Date());
			System.out.print("Digite o ID do Cliente  atrelado ao pedido promocional: ");
			pedidoPromo.setIdCliente(id1 = Integer.parseInt(s.nextLine()));
			System.out.print("Digite o ID do Pedido Promocional:");
			pedidoPromo.setIdCliente(id2 = Integer.parseInt(s.nextLine()));
			
			pedidoPromoDAO.update(pedidoPromo);
			
			System.out.println("Pedido atualizado com sucesso!");		
			
			
		}else if (op==3) {
			
			System.out.println("-------------  REMOVER PEDIDO PROMOCIONAL ------------");
			
			System.out.print("Digite o ID do pedido promocional que você deseja remover: ");
			pedidoPromo.setIdPedidoPromo(id1 = Integer.parseInt(s.nextLine()));
			pedidoPromoDAO.removeByID(id1);
			System.out.println("Pedido removido com sucesso!");
			
		}else {
			
			System.out.println("------------ PEDIDOS PROMOCIONAIS CADASTRADOS ----------");
			System.out.println();
			
			for (PedidoPromo p : pedidoPromoDAO.getPedidosPromo()) {

				System.out.println("N. PEDIDO: " + p.getIdPedidoPromo() + " \nDATA DO PEDIDO: " + p.getDataPedidoPromo()
						+ "\nID CLIENTE: " + p.getCliente().getIdCliente() + "\nCLIENTE: " + p.getCliente().getNome()
						+ "\nCPF: " + p.getCliente().getCpf() + "\nTELEFONE: " + p.getCliente().getTelefone()
						+ "\nEMAIL: " + p.getCliente().getEmail());
				System.out.println("----------------------------------------------------------");
				

			}
			
			System.out.println("Estes são todos os pedidos cadastrados no banco de dados. Obrigado!");
			
		}

	}

}

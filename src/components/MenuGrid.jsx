import MenuItem from './MenuItem';

function MenuGrid() {
  const menuItems = [
    {
      name: "Cappuccino Italiano",
      description: "Espresso, leite vaporizado e espuma cremosa.",
      price: "R$ 8,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6monmtEIUwKOhMacoOFqSsOKjgNcehpH9Nh_a6J_ayYgac96cv220-SKiGDXNgBKNWIXUuA4m9Zswhi00k7f9klAsEi-VvGY0jQ-WWzwMqfN-Urq56M_W8KuWhZ4gGSwir-im22nygR0pnzMYFqplDJFq4onp6D5CnkGcsHITghWPFRLeDrz49pb1VIZbDR3Z1g0P0F-xbO8r0i3OkTZbc3HUREz4kR-h0cw_Skym56RjLFM7i9H2jt2LSIJF2SqKuaRS4N7hug"
    },
    {
      name: "Café Latte",
      description: "Uma dose de espresso com leite vaporizado.",
      price: "R$ 7,50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxAEAR8NrEVOQq9tIOTldwvAR0Yyv2Y5j56L9EeQ1pKfmP3Of9yMudyBxJX1_uKVaEadE_hGixxqRrCK7fGD56ousPsKwEXvaQ-ZsHLUXCGIX2xNXsn2AlWNVRlJ-VDHz2MFYR2ZRv9fPkYnRZh46jx3WwW5JytXGyY3v4SxVcivzYETQqE_uQCzvy8AGnuM6DvdRkdQk_YGVSKnUxjQFDRNcgCahHHry4_Wv5NBXz1DbaYHvymmEM0W0gHFuGGEIWPajQeE0nGg"
    },
    {
      name: "Espresso",
      description: "Café forte e encorpado, puro e intenso.",
      price: "R$ 5,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfEhE-lIRdG_VQw-xLtzWI6qnrbzB06wf1PMwhRZpx2OKUtzzyXYf7cGhC80ngeiUsnvzgU1rvmXvxYIzkVakvTenRCD9_He0BnqgOvJwlqN41-sZ5xUPhvEbQjj2kRC9BZX5bOCpHMCCgyz6vDirP7rjSLBpmzttCbXK53Mcem1AneU8GwNcSLIVng1QJLelM3b5V_z_WP5IZlIimV6rjhMiBuI0jCtOIWxmpcPYuW0LHe0lfg8qEMXeKqArK6ngcugG-bDKUTg"
    },
    {
      name: "Chocolate Quente",
      description: "Cremoso e doce, feito com chocolate nobre.",
      price: "R$ 9,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXLT_UbnK6FtCg4fh0t1oSq1DEBwDtf3agX1hsgAV6knntRxDofQj_-odaKEfTfHBU5GbBGQClgBG5qNhyxq5qiWZ47G4O--McAE1XPWI6JL_JqyOKrAhq6ZQA4ylqfchqeoYMhRjyUX7i5gaO9jebjXrPXrOKEpheL6tFSpC-1JpWrUloK3OWIeovd8aVywZXT8_kJMZYnUr3rL7QszxDc9ckdtt7zEoR23IbA6yaqShRc1gXeyZwqVMwDOeuRRIEUabDlQhl6g"
    },
    {
      name: "Coxinha de Frango",
      description: "Salgado tradicional com recheio cremoso.",
      price: "R$ 7,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsTUZSPW4e3OEPCvNJhvGV2HK_SEdXAq5v9B7LNWhylOcqnr9gf4IiCsJIVagUPFV3wwqKLSAySUNC3jZTMaHKWSqJBLwuCeoBf87O4neucfwcue6zg8_-g4Xe5eWDH7KJOJ_iVOXdxqFnDvoxfdhfqc7zF6cv5umwRYq6IBhATjeLssRkN-tO-s8BqlIu0RpV-JIP0Qbq2rcBnFYEJNS0Ha5cSNeakx-YEgFy_MDAO2tagK_WVFyWANSXFP1EDzCqFdlKeKyiew"
    },
    {
      name: "Pão de Queijo",
      description: "Clássico mineiro, sempre quentinho.",
      price: "R$ 4,50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAViKbLiRicY6Y_kuLfEevL0_z4m2wbZYBadMhFL_KkJykdD5pYCElbxDQOFjWgd-5UOIv1nNP-m166o09FjUf11Pypa10ofGTLrc_MdyBMo2IFBB4rpayoAlCfY9Rkh_N3AXWL4aemwekGze-sEScTrJtx9ID8WZjdKzU9g7D9gz8_OF2SUp0njQG6vbpyNOCV5Yh-qaELbJeOsibxFMyO1CGqCC9n22QWu4xkjNEqAu0v7y4T58voT9mAfL1Wub8PtHyqyPVsuw"
    },
    {
      name: "Cheesecake de Frutas",
      description: "Torta cremosa com calda de frutas vermelhas.",
      price: "R$ 12,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfUGnkceeR3R5zC0PRmAXuPk5c-KPgtGarU0sSGoiWIgPjjYNOuphjgrNfYxyyttyJ74ln6kkSZ0L0iQehN1ChslT0XHKxdv67gXylKAYg8l0GUGDwhiJVrxK6a60qZZzYAg_4_bVFfD1qLq2gfZKouJR_R-ESxX6m3kJkSKECxMHFIn7oh1wHtL1wMOkxXjHLrx6B6qQMXETjtFQi-TuiGFAffoCEwCQtnCiTuu3YN9VCIeBubLbHCodBf1ay8A9OeIaA5Nml4A"
    },
    {
      name: "Croissant Doce",
      description: "Folhado e crocante, com cobertura de chocolate.",
      price: "R$ 8,50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_ydWADDcmxTBrzHmvaYIcYgw1m9HAZV-YwcTnkLkVb8E_Cae7oAs1yA4u3uqisXpdpEM4KYV_MU4m9MYNsL6354aLcJ0qZMSuz9XyRKL-Y5qBO0TeDJLMDI6JoWRteszcR1Qid19SexTr8yOkhLLeKK9VvsjbAHnWVYDSqV7BKE42pnfyD0_GkL5iI1o7LFgHKuNjavNsEmpRPDVNhZnkAxcUCccKHo7U0OzXNoEYX0afk6oL1Y__Fl1EKLiDe0vP36xoTMpUQA"
    }
  ];

  return (
    <>
      <h2 className="text-[#0d121b] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-5">
        Nosso Cardápio
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 p-8">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </>
  );
}

export default MenuGrid;

'use strict';

/**
 * Migration: 20241228235009_yylakucikxgdspv
 * Description: Fix typo in column name
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('awmdfdnvpb', function(table) {
    table.timestamp('nunugptswy');
    table.bigInteger('hxyxyywwbz');
    table.boolean('fkivtoegtx');
    table.string('grzlsyanws');
    table.timestamp('hylvwhxyhe');
    table.boolean('vqyzrtfuvg');
    table.string('fksvvffnpu');
  });
  await knex.schema.alterTable('uvhyytksfb', function(table) {
    table.timestamp('cetbjrwthi');
    table.integer('gddsbemvbd');
    table.timestamp('zvviviwntc');
    table.string('ppxrvusrng');
    table.string('sbirpnmlsh');
    table.string('tnaogayprl');
    table.json('cqwzkkvtsb');
    table.timestamp('jvavaekzoi');
    table.float('lonypqceiy');
    table.string('fjhqdwikbz');
  });
  await knex.schema.alterTable('eckappmzag', function(table) {
    table.text('gmfzbbcdpl');
    table.float('rajgmkknpw');
    table.timestamp('mlopkkdxdy');
    table.boolean('htpmntiysq');
    table.timestamp('qhdzjnhcdu');
    table.boolean('euwtfgwurv');
    table.timestamp('sdutixphwn');
    table.float('oewgpehitx');
    table.bigInteger('vesahkfmvh');
  });
  await knex.schema.alterTable('yynfetnmvp', function(table) {
    table.string('qlucczhuls');
    table.json('zhjhkmdsrp');
    table.bigInteger('nmelaachmu');
  });
  await knex.schema.alterTable('pwehqoquzz', function(table) {
    table.boolean('oaoyopwwob');
    table.timestamp('ectvhwjwod');
    table.bigInteger('evpmjightt');
    table.json('jatfqffyoy');
    table.string('jabcxmgumt');
    table.bigInteger('qnmbnpeqsw');
  });
  await knex.schema.alterTable('lgvruvoyyx', function(table) {
    table.float('fphxjlekmd');
    table.float('bwybsbtllq');
    table.bigInteger('rutgwwossp');
    table.integer('rpguungvbl');
    table.string('fyvkwwjdgt');
    table.string('beyesrhlyv');
    table.integer('pngbvebpdk');
    table.timestamp('acfficvdtz');
  });
  await knex.schema.alterTable('hthmrtpdzv', function(table) {
    table.string('dqgfaumtoy');
    table.boolean('shbskpvisc');
    table.timestamp('pqsrfcfanp');
    table.json('sqqutwcqts');
    table.timestamp('verbyoxvrr');
    table.integer('hltkaqaezl');
    table.boolean('liakhavuxd');
  });
  await knex.schema.alterTable('pesbptxbxe', function(table) {
    table.float('fsbjerupxi');
    table.text('lsvwsnxlwb');
    table.json('ojtemgzzuv');
    table.timestamp('bvyamovabz');
    table.timestamp('ufgmjwwejt');
    table.bigInteger('lahmhmabqo');
  });
  await knex.schema.alterTable('wgurxnseik', function(table) {
    table.timestamp('ssirastkob');
    table.json('tfbezroyvm');
    table.integer('jmrfpcluom');
    table.bigInteger('bsyqubgftu');
    table.json('ckzrtkhytp');
    table.integer('humtvxomtu');
  });
  await knex.schema.alterTable('vzuvqzrfpf', function(table) {
    table.timestamp('nzzsajfsol');
    table.string('wdpsaurogr');
    table.boolean('gbcqxwwjlu');
    table.json('daqepapvdu');
    table.timestamp('vwizlljool');
    table.integer('gkejzhpdkx');
  });
  await knex.schema.alterTable('ribpaparrt', function(table) {
    table.timestamp('jvgjiiylcq');
    table.json('cnydojltvj');
    table.json('fkehnmenra');
    table.float('ioehmzitgh');
    table.json('rqmfovjvis');
    table.boolean('wfvmaivpuz');
    table.timestamp('ydvzzjikbw');
    table.integer('kcaqusybhx');
  });
  await knex.schema.alterTable('xhbcfweoyl', function(table) {
    table.integer('zfeipultsx');
    table.integer('dehtpqdgvw');
    table.text('tkccuebglr');
    table.bigInteger('otbvromhyp');
  });
  await knex.schema.alterTable('desbauuptz', function(table) {
    table.integer('eulaiirllr');
    table.boolean('rmnxfnqyqq');
    table.string('hygrbnajyo');
    table.string('rvwaaaslxl');
    table.bigInteger('jwrorkvcbd');
    table.integer('hqjzuqxeiw');
  });
  await knex.schema.alterTable('nuabeaxnzb', function(table) {
    table.text('rensjebzje');
    table.bigInteger('velnstbiap');
    table.bigInteger('uqeaoxwnkf');
    table.float('sldlvgcqce');
    table.string('hmtxkedpkh');
    table.timestamp('rgzxfyhtqv');
    table.float('zbpkcmfqis');
    table.integer('cqrestzgyr');
    table.text('znedctguod');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};